import mongoose, { ObjectId } from "mongoose";

export const commonRepository = <M>(_model: mongoose.Model<M>) => {
  return {
    find: async (filter?: Object) => {
      return _model.find(filter ? filter : {});
    },
    findOne: async (filter?: Object) => {
      return _model.findOne(filter ? filter : {});
    },
    create: async <D>(input: D) => {
      return _model.create(input);
    },
    update: async (filter: Object, data: Object) => {
      return _model.updateMany(filter, {$set:data});
    },
  };
};
