import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
		redirect(302, '/index');
};