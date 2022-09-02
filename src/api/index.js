import axios from "axios";
import Cookies from "js-cookie";

const url = "https://carom0.herokuapp.com/admin";

const token = Cookies.get("token");

export const LoginAdmin = async (email, password) => {
  try {
    const { data } = await axios.post(url + "/login", {
      email: email,
      password: password,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetDashboard = async () => {
  try {
    const { data } = await axios.get(url + "/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetUsers = async (date, page, limit) => {
  try {
    const { data } = await axios.get(url + "/users", {
      params: {
        pg: page,
        lm: limit,
        date: date,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ManageUser = async (id, action) => {
  try {
    const { data } = await axios.post(
      url + "/manageUser",
      {
        id: id,
        isBlock: action,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetDeposits = async (date, page, limit) => {
  try {
    const { data } = await axios.get(url + "/deposits", {
      params: {
        pg: page,
        lm: limit,
        date: date,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ManageDeposits = async (id, action) => {
  try {
    const { data } = await axios.post(
      url + "/manageDeposit",
      {
        id: id,
        status: action,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetWithdrawal = async (date, page, limit) => {
  try {
    const { data } = await axios.get(url + "/withdawals", {
      params: {
        pg: page,
        lm: limit,
        date: date,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const ManageWithdrawal = async (id, action) => {
  try {
    const { data } = await axios.post(
      url + "/manageWithdawal",
      {
        id: id,
        status: action,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetSubadmin = async () => {
  try {
    const { data } = await axios.get(url + "/subadmins", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const AddSubadmin = async (admin) => {
  try {
    const { data } = await axios.post(url + "/addSubAdmin", admin, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateSubadmin = async (admin, id) => {
  try {
    const { data } = await axios.post(
      url + "/updateSubAdmin",
      {
        ...admin,
        id: id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteSubadmin = async (id) => {
  try {
    const { data } = await axios.post(
      url + "/deleteSubadmin",
      {
        id: id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetRevenue = async (date, page, limit) => {
  try {
    const { data } = await axios.get(url + "/revenueTable", {
      params: {
        pg: page,
        lm: limit,
        date: date,
      },
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetRevenueGraph = async () => {
  try {
    const { data } = await axios.get(url + "/revenueGraph", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetSpinPlan = async () => {
  try {
    const { data } = await axios.get(url + "/spinplan", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateSpinPlan = async (input) => {
  try {
    const { data } = await axios.post(
      url + "/updateCaromplan",
      {
        violet: input.violet,
        // purple: input.purple,
        // white: input.white,
        // red: input.red,
        // blue: input.blue,
        // green: input.green,
        // orange: input.orange,
        // yellow: input.yellow,
        id: input._id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetCarromPlan = async () => {
  try {
    const { data } = await axios.get(url + "/caromplan", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const AddCarromPlan = async (input, image) => {
  try {
    const { data } = await axios.post(
      url + "/addCaromplan",
      {
        entryFee: input.entryFee,
        prize: input.prize,
        image: image,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateCarromPlan = async (input, image) => {
  try {
    const { data } = await axios.post(
      url + "/updateCaromplan",
      {
        entryFee: input.entryFee,
        prize: input.prize,
        image: image,
        id: input._id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteCarromPlan = async (id) => {
  try {
    const { data } = await axios.post(
      url + "/deleteCaromplan",
      {
        id: id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const GetUploads = async () => {
  try {
    const { data } = await axios.get(url + "/uploads", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateUploads = async (id, image) => {
  try {
    const { data } = await axios.post(
      url + "/updateUploads",
      {
        ...image,
        id: id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
