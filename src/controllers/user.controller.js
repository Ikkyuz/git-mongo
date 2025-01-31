const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new post
exports.createUser = async (req, res) => {
  const { email, name } = req.body; // Include postId
  const result = await prisma.users.create({
    data: {
      email: email,
      name: name,
    },
  });
  res.json(result);
};

exports.getUsers = async (req, res) => {
  const user = await prisma.users.findMany({
    include: { posts: true }, // Include post details
  });
  res.json(user);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.users.findUnique({
    where: { id: id },
    include: { posts: true }, // Include post details
  });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name } = req.body;
  const result = await prisma.users.update({
    where: { id: id },
    data: {
        email: email,
        name: name,
    },
  });
  res.json(result);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.users.delete({
    where: { id: id },
  });
  res.json(user);
};
