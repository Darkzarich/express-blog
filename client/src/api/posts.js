import Query from './_query';

const CONTROLLER_URL = '/posts';

export default {
  getPosts(params) {
    return Query({
      url: CONTROLLER_URL,
      method: 'get',
      params,
    });
  },
  createPost(data) {
    return Query({
      url: CONTROLLER_URL,
      method: 'post',
      data,
    });
  },
  uploadAttachment(formData) {
    return Query({
      url: `${CONTROLLER_URL}/upload`,
      method: 'post',
      data: formData,
    });
  },
  getPostBySlug(slug) {
    return Query({
      url: `${CONTROLLER_URL}/${slug}`,
      method: 'get',
    });
  },
  updatePostById(id, data) {
    return Query({
      url: `${CONTROLLER_URL}/${id}`,
      method: 'put',
      data,
    });
  },
  deletePostById(id) {
    return Query({
      url: `${CONTROLLER_URL}/${id}`,
      method: 'delete',
    });
  },
  updateRateById(id, data) {
    return Query({
      url: `${CONTROLLER_URL}/${id}/rate`,
      method: 'put',
      data,
    });
  },
  removeRateById(id) {
    return Query({
      url: `${CONTROLLER_URL}/${id}/rate`,
      method: 'delete',
    });
  },
};
