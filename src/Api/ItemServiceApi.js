import axios from 'axios';

const BASE_URL = 'http://gateway.172.20.136.101.sslip.io/api';
export const REST_API_BASE_URL_ITEM = `${BASE_URL}/item`;
export const employee = `${BASE_URL}/employee`;
const recruitments = `${BASE_URL}/recruitment`;
export const organization = `${BASE_URL}/organization`;
// http://172.20.136.101:8000/api/organization/pay-grades/71839b5e-20f6-44b1-925d-65580fee6d58/get-all


const apiClient_item = axios.create({
  baseURL: REST_API_BASE_URL_ITEM,
  headers: {
    'Content-Type': 'application/json',
  },
});
// const apiClient_employee = axios.create({
//   baseURL: employee,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const apiClient_recruitments = axios.create({
//   baseURL: recruitments,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const apiClient_organaization = axios.create({
//   baseURL: organization,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// apiClient_recruitments.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient_recruitments.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');

//       if (refreshToken) {
//         try {
//           const data = new URLSearchParams({
//             grant_type: 'refresh_token',
//             client_id: 'saas-client',
//             client_secret: 'APHalzvUVsfz9Jffe5ZAZ1XImFwv5a8K',
//             refresh_token: refreshToken,
//           });

//           const response = await axios.post(
//            'http://keycloak.172.20.136.101.sslip.io/realms/saas-erp/protocol/openid-connect/token',
//             data,
//             { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
//           );

//           const newAccessToken = response.data.access_token;
//           localStorage.setItem('accessToken', newAccessToken);
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//           return apiClient_recruitments(originalRequest);
//         } catch (refreshError) {
//           console.error('Refresh token failed:', refreshError);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// apiClient_organaization.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient_organaization.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');

//       if (refreshToken) {
//         try {
//           const data = new URLSearchParams({
//             grant_type: 'refresh_token',
//             client_id: 'saas-client',
//             client_secret: 'APHalzvUVsfz9Jffe5ZAZ1XImFwv5a8K',
//             refresh_token: refreshToken,
//           });

//           const response = await axios.post(
//             'http://172.20.136.101:8282/realms/saas-erp/protocol/openid-connect/token',
//             data,
//             { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
//           );

//           const newAccessToken = response.data.access_token;
//           localStorage.setItem('accessToken', newAccessToken);
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//           return apiClient_organaization(originalRequest);
//         } catch (refreshError) {
//           console.error('Refresh token failed:', refreshError);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );

apiClient_item.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient_item.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          const data = new URLSearchParams({
            grant_type: 'refresh_token',
            client_id: 'saas-client',
            client_secret: 'APHalzvUVsfz9Jffe5ZAZ1XImFwv5a8K',
            refresh_token: refreshToken,
          });

          const response = await axios.post(
            'http://keycloak.172.20.136.101.sslip.io/realms/saas-erp/protocol/openid-connect/token',
            data,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
          );

          const newAccessToken = response.data.access_token;
          localStorage.setItem('accessToken', newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return apiClient_item(originalRequest);
        } catch (refreshError) {
          console.error('Refresh token failed:', refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);
// ITEM API CALLS

export const createItem = async (tenantId, itemData) => {
  const url = `/items/${tenantId}/add`;
  return apiClient_item.post(url, itemData);
};

export const updateItem = async (tenantId, id, itemData) => {
  const url = `/items/${tenantId}/update/${id}`;
  return apiClient_item.put(url, itemData);
};

export const getItemById = async (tenantId, id) => {
  const url = `/items/${tenantId}/get/${id}`;
  return apiClient_item.get(url);
};

export const getAllItems = async (tenantId) => {
  const url = `/items/${tenantId}/get-all`;
  return apiClient_item.get(url);
};

export const getItemsBySubCategory = async (tenantId, subCategory) => {
  const url = `/items/${tenantId}/get/sub-category/${subCategory}`;
  return apiClient_item.get(url);
};


  export const getItemsByCategory = async (tenantId, category) => {
  const url = `/items/${tenantId}/get/category/${category}`;
  return apiClient_item.get(url);
};

export const deleteItem = async (tenantId, id) => {
  const url = `/items/${tenantId}/delete/${id}`;
  return apiClient_item.delete(url);
};
export const createPurchaseInspection = async (tenantId, inspectionData) => {
  const url = `/inspections/${tenantId}/purchase`;
  return apiClient_item.post(url, inspectionData);
};

export const createOtherInspection = async (tenantId, inspectionData) => {
  const url = `/inspections/${tenantId}/other`;
  return apiClient_item.post(url, inspectionData);
};

export const updatePurchaseInspection = async (tenantId, id, inspectionData) => {
  const url = `/inspections/${tenantId}/update/purchase/${id}`;
  return apiClient_item.put(url, inspectionData);
};

export const updateOtherInspection = async (tenantId, id, inspectionData) => {
  const url = `/inspections/${tenantId}/update/other/${id}`;
  return apiClient_item.put(url, inspectionData);
};

export const getInspectionById = async (tenantId, id) => {
  const url = `/inspections/${tenantId}/get/${id}`;
  return apiClient_item.get(url);
};

export const getAllInspections = async (tenantId) => {
  const url = `/inspections/${tenantId}/get-all`;
  return apiClient_item.get(url);
};

export const deleteInspection = async (tenantId, id) => {
  const url = `/inspections/${tenantId}/delete/${id}`;
  return apiClient_item.delete(url);
};

// apiClient_employee.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient_employee.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');

//       if (refreshToken) {
//         try {
//           const data = new URLSearchParams({
//             grant_type: 'refresh_token',
//             client_id: 'saas-client',
//             client_secret: 'APHalzvUVsfz9Jffe5ZAZ1XImFwv5a8K',
//             refresh_token: refreshToken,
//           });

//           const response = await axios.post(
//             'http://172.20.136.101:8282/realms/saas-erp/protocol/openid-connect/token',
//             data,
//             { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
//           );

//           const newAccessToken = response.data.access_token;
//           localStorage.setItem('accessToken', newAccessToken);
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

//           return apiClient_employee(originalRequest);
//         } catch (refreshError) {
//           console.error('Refresh token failed:', refreshError);
//         }
//       }
//     }

//     return Promise.reject(error);
//   }
// );