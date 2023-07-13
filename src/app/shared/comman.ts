export const saveCookie = (data: any) => {
	document.cookie = `jwt=${data.access_token}; expires=${new Date(
		new Date().getTime() + 10 * 24 * 60 * 60 * 1000
	).toUTCString()}`;
	document.cookie = `refreshToken=${data.refresh_token}; expires=${new Date(
		new Date().getTime() + 7 * 24 * 60 * 60
	).toUTCString()}`;
	localStorage.setItem('username', data.username);
	localStorage.setItem('firstName', data.firstName);
	localStorage.setItem('lastName', data.lastName);
	localStorage.setItem('role', data.role);
};
