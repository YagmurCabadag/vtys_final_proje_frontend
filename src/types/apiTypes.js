import { ApiENUM } from "./enum";

const createAuthTypes = (namespace) => ({
  LOGIN: `${namespace}/login`,
  REGISTER: `${namespace}/register`,
  LOGOUT: `${namespace}/logout`,
  GET_PROFILE: `${namespace}/me`,
  VERIFY_ACCOUNT: `${namespace}/confirm`,
  CHANGE_PASSWORD: `${namespace}/resetPassword`,
  GET_ALL_USERS: `${namespace}/all`,
});

const createTeamTypes = (namespace) => ({
  CREATE_TEAM: `${namespace}/create-team`,
  GET_TEAM: `${namespace}/get-user-team`,
  GET_TEAM_LEADER: `${namespace}/get-team-member`,
  GET_TEAM_MEMBERS: `${namespace}/get-team-members`,
  GET_TEAM_MEMBER: `${namespace}/get-team-member`,
  GET_TEAM_PROJECTS: `${namespace}/get-team-projects`,
  REMOVE_TEAM_MEMBER: `${namespace}/remove-member`,
  ADD_MEMBER: `${namespace}/add-member`,
});

const createProjectTypes = (namespace) => ({
  DELETE_TEAM_PROJECT: `${namespace}/delete-project`,
  CREATE_TEAM_PROJECT: `${namespace}/create-project`,
  GET_TEAM_PROJECT: `${namespace}/get-project`,
  GET_PROJECT_BY_ID: `${namespace}/get-project`,
});

const createQuestTypes = (namespace) => ({
  GET_TEAM_QUESTS: `${namespace}/get-quests`,
  CREATE_QUEST: `${namespace}/create-quest`,
  GET_QUEST_BY_ID: `${namespace}/get-quest`,
  REMOVE_QUEST: `${namespace}/delete-quest`,
  UPDATE_QUEST: `${namespace}/update-quest`,
});

export const authTypes = createAuthTypes(ApiENUM.AUTH);
export const teamTypes = createTeamTypes(ApiENUM.TEAM);
export const projectTypes = createProjectTypes(ApiENUM.PROJECT);
export const questTypes = createQuestTypes(ApiENUM.QUEST);
