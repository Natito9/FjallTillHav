import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  instructionUUID: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  errorCode: { type: String },
  errorMessage: { type: String },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

PaymentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);