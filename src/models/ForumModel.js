import mongoose, { Types } from 'mongoose'
import Tag from './TagModel'
import Comment from './CommentModel'
import Students from './StudentModel'

const forumSchema = new mongoose.Schema(
  {
    studentId: {
      type: Types.ObjectId,
      ref: Students.modelName,
      required: [true, 'Please provide a Student ID'],
    },
    publishDate: {
      type: Date,
      required: [true, 'Please provide a date'],
    },
    title: {
      type: String,
      required: [true, 'Please provide the title'],
    },
    description: {
      type: String,
      required: [true, 'Please provide the description'],
    },
    tags: [
      {
        type: Types.ObjectId,
        ref: Tag.modelName,
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    likedBy: [
      {
        type: Types.ObjectId,
        ref: Students.modelName,
        default: [],
      },
    ],
    images: [
      {
        type: String,
        default: [],
      },
    ],
    comments: [
      {
        type: Types.ObjectId,
        ref: Comment.modelName,
        default: [],
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

const Forum = mongoose.models.forums || mongoose.model('forums', forumSchema)

export default Forum
