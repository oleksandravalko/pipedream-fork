export const ACTOR_ID = "aYG0l9s7dbB7j3gbS";
export const LIMIT = 100;

export const EVENT_TYPES = [
  "ACTOR.RUN.CREATED",
  "ACTOR.RUN.SUCCEEDED",
  "ACTOR.RUN.FAILED",
  "ACTOR.RUN.ABORTED",
  "ACTOR.RUN.TIMED_OUT",
  "ACTOR.RUN.RESURRECTED",
];

export const ACTOR_JOB_STATUSES = {
  READY: "READY", // started but not allocated to any worker yet
  RUNNING: "RUNNING", // running on worker
  SUCCEEDED: "SUCCEEDED", // finished and all good
  FAILED: "FAILED", // run or build failed
  TIMING_OUT: "TIMING-OUT", // timing out now
  TIMED_OUT: "TIMED-OUT", // timed out
  ABORTING: "ABORTING", // being aborted by user
  ABORTED: "ABORTED", // aborted by user
};

export const ACTOR_JOB_TERMINAL_STATUSES = [
  ACTOR_JOB_STATUSES.SUCCEEDED,
  ACTOR_JOB_STATUSES.FAILED,
  ACTOR_JOB_STATUSES.TIMED_OUT,
  ACTOR_JOB_STATUSES.ABORTED,
];
