const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jon", age: 55 },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(req: Request) {
  try {
    const user = await req.json(); // Await the request body
    const newUser: any = {
      id: users.length + 1,
      name: user?.name,
    };

    users.push(newUser);

    return new Response(
      JSON.stringify({ id: newUser.id }), // Only return the ID
      {
        headers: { "Content-Type": "application/json" },
        status: 201,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
}
