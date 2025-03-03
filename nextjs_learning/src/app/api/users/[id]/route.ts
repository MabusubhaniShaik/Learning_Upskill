const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jon", age: 55 },
];

export async function GET(_req: Request, context: { params: { id: string } }) {
  const { id } = await context.params; // Await the params before using them

  const user = users.find((user: any) => user.id === parseInt(id));

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function DELETE(
  _req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params; // No need to await params

  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  // Remove the user from the array
  const deletedUser = users.splice(userIndex, 1)[0];

  return new Response(
    JSON.stringify({ message: "User deleted", user: deletedUser }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
