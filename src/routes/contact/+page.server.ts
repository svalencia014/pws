import { Actions } from '@sveltejs/kit';

import { prisma } from '$lib/db';

export const prerender = false;

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email').toString();
		const message = formData.get('message').toString();
		const name = formData.get('name').toString();
		
    let data = await prisma.submission.create({
      data: {
        email: email,
        message: message,
        name: name
      }
    });

    if (data == null) {
      return { success: false };
    }
	}
};
