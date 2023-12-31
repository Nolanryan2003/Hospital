import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    patientReference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainPatients",
      required: true,
    },
    diagnosis: {
      type: String,
      required: false,
    },
    doctorRequesting: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["stat", "routine"],
      required: false,
    },
    phoneNumber: {
      type: String,
      required: [false, "User phone number required"],
    },
    additionalNotes: {
      type: String,
    },
    // ... other fields as needed ...
  },
  {
    timestamps: true,
  }
);

export const Consultation = mongoose.model("Consultations", consultationSchema);
