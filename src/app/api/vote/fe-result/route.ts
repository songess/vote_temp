export async function get(req: Request, res: Response) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/vote/fe-result`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
