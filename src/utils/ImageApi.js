class ImageApi {
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getPictures = (page = 1, limit = 10) => {
    return fetch(
      `https://picsum.photos/v2/list?page=${page};limit=${limit}`
    ).then((response) => {
      return this._checkResponse(response);
    });
  };

  getPictureInfo = (id = 0) => {
    return fetch(`https://picsum.photos/id/${id}/info`).then((response) => {
      return this._checkResponse(response);
    });
  };
}

export const imageApi = new ImageApi();
