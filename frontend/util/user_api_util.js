export const fetchAllUsers = (success,error) => {
	$.ajax({
		method: 'get',
		url: '/api/users',
		success,
		error
	});
};

export const fetchUser = (id,success,error) => {
	$.ajax({
		method: 'get',
		url: `/api/users/${id}`,
		success,
		error
	});
};

export const updateUser = (user,success,error) => {
	$.ajax({
		method: 'patch',
		url: `/api/users/${user.user.id}`,
    data: user,
		success,
		error
	});
};
