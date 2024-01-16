'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
};


export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id }
  });

  redirect('/');
};


export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  return {
    message: 'Title must be longer'
  };

  // check the user's inputs and make sure they're valid (from inputs. as sting used to simplify it for ts)
  // const title = formData.get('title') as string;
  // const code = formData.get('code') as string;

  // create a new record in the database
  // const snippet = await db.snippet.create({
  //   data: {
  //     title,
  //     code,
  //   },
  // });

  // Redirect the user back to the root route
  // redirect('/');
}
