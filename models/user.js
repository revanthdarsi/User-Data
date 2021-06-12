const mongoose = require("mongoose");

/* SCHEMA */
let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
    },
    localitiy: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
    coordinatesType: {
      type: String,
    },
    coordinates: [Number],
  },
  location: {
    type: {
      type: String,
    },
    coordinates: [Number],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedBy: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.index({ location: "2dsphere" });

/*  Static Method To Get All Users */

userSchema.statics.getUsers = function () {
  return new Promise((resolve, reject) => {
    this.find((error, docs) => {
      if (error) {
        console.error(error);
        return reject(error);
      }
      resolve(docs);
    });
  });
};

/*  Static Method To Find User By Mobile */

userSchema.statics.findByMobile = function (mobile) {
  return new Promise((resolve, reject) => {
    this.findOne({ mobile: mobile }, (error, docs) => {
      if (error) {
        console.error(error);
        return reject(error);
      }
      resolve(docs);
    });
  });
};

const model = mongoose.model("users", userSchema);
module.exports = model;
