import {getMembers, getMessages} from "./data";
import mergeAndFormatMessages, {MessageIds} from "./Utils/mergeAndFormatMessages";

export default async function getChatLog() {

  const messages = await getMessages();
  const members = await getMembers();

  let formatted =  mergeAndFormatMessages('userId', 'id', MessageIds(messages), members);

  return Promise.resolve(formatted);
};