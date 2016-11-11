export const fetchAllSongs = (success,error) => {
	$.ajax({
		method: 'get',
		url: '/api/songs',
		success,
		error
	});
};

export const fetchSong = (id,success,error) => {
	$.ajax({
		method: 'get',
		url: `/api/songs/${id}`,
		success,
		error
	});
};

export const createSong = (song,success,error) => {
	$.ajax({
		method: 'post',
		url: '/api/songs',
    data: song,
		success,
		error
	});
};

export const updateSong = (song,success,error) => {
	$.ajax({
		method: 'patch',
		url: `/api/songs/${song.song.id}`,
    data: song,
		success,
		error
	});
};

export const deleteSong = (id,success,error) => {
	$.ajax({
		method: 'delete',
		url: `/api/songs/${id}`,
		success,
		error
	});
};
