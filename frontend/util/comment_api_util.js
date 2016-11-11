export const createComment = (comment,success,error) => {
	$.ajax({
		method: 'post',
		url: '/api/comments',
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
