// src/axiosConfig.js
import axios from 'axios';

// إعداد العنوان الأساسي للـ API
axios.defaults.baseURL = 'http://localhost:5000/api';

export default axios;
