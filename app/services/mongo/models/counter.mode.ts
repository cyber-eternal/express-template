import { model, Schema } from 'mongoose';

const CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

CounterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const counterModel = model('counter', CounterSchema);

export const autoIncrementModelID = function (modelName, doc, next) {
  counterModel.findByIdAndUpdate(
    modelName, // The ID to find for in counters model
    { $inc: { seq: 1 } }, // The update
    { new: true, upsert: true }, // The options
    function (error, counter) {
      // The callback
      if (error) return next(error);

      doc.id = counter.seq;
      next();
    },
  );
};
