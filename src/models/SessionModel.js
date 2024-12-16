import mongoose from 'mongoose'
import Summary from './SummaryModel'

const sessionSchema = new mongoose.Schema(
  {
    session: {
      type: String,
      required: [true, 'Please provide a session'],
    },
    summaries: [
      {
        type: Types.ObjectId,
        ref: Summary.modelName,
      },
    ],
  },
  { timestamps: true }
)

const Session =
  mongoose.models.sessions || mongoose.model('sessions', sessionSchema)

export default Session
