export const fetchAllComments = (success,error) => {
	$.ajax({
		method: 'get',
		url: '/api/comments',
		success,
		error
	});
};

export const fetchComment = (id,success,error) => {
	$.ajax({
		method: 'get',
		url: `/api/comments/${id}`,
		success,
		error
	});
};

export const createComment = (comment,success,error) => {
	$.ajax({
		method: 'post',
		url: '/api/comments',
    data: comment,
		success,
		error
	});
};

export const updateComment = (comment,success,error) => {
	$.ajax({
		method: 'patch',
		url: `/api/comments/${comment.id}`,
    data: comment,
		success,
		error
	});
};

export const deleteComment = (id,success,error) => {
	$.ajax({
		method: 'delete',
		url: `/api/comments/${id}`,
		success,
		error
	});
};
