export const login = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/sessions',
		data: user,
		success,
		error
	});
};

export const signup = ({user}, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: user,
		success,
		error
	});
};

export const logout = (success,error) => {
	$.ajax({
		method: 'delete',
		url: '/api/sessions',
		success,
		error
	});
};
