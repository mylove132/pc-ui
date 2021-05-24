import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface ScriptTag {
  name: string;
}
interface DelScriptTag {
  index: number;
}
export interface IScriptState {
  scriptTagsList: ScriptTag[]
}
@Module({ dynamic: true, store, name: 'script', namespaced: true })
class ScriptStore extends VuexModule implements IScriptState {
  scriptTagsList: ScriptTag[] = [];
  collapse: boolean = false;

  @Mutation
  SET_Script_TAG_ITEM(payload: ScriptTag) {
    this.scriptTagsList.push(payload);
  }

  @Mutation
  DEL_TAGS_ITEM(payload: DelScriptTag) {
    this.scriptTagsList.splice(payload.index, 1);
  }

  @Mutation
  CLEAR_TAGS() {
    this.scriptTagsList = [];
  }

  @Mutation
  CLOSE_TAGS_OTHER(payload: ScriptTag[]) {
    this.scriptTagsList = payload;
  }

  @Mutation
  CLOSE_CURRENT_TAG(payload: any) {
    for (let i = 0, len = this.scriptTagsList.length; i < len; i++) {
      const item = this.scriptTagsList[i];
     }
  }


  @Mutation
  SET_COLLAPSE(payload: boolean): void {
    this.collapse = payload;
  }

  @Action
  public dispatchSetScriptTagItem(payload: ScriptTag) {
    console.log(payload + "---------------------------")
    this.SET_Script_TAG_ITEM(payload);
  }

  @Action
  public dispatchClearTags() {
    this.CLEAR_TAGS();
  }

  @Action
  public dispatchCloseTagsOther(payload: ScriptTag[]) {
    this.CLOSE_TAGS_OTHER(payload);
  }

  @Action
  public dispatchDelScriptTagsItem(payload: DelScriptTag) {
    this.DEL_TAGS_ITEM(payload);
  }

  @Action
  public dispatchCloseCurrentTag(payload: any) {
    this.CLOSE_CURRENT_TAG(payload);
  }

  @Action
  public dispatchSetCollapse(payload: boolean) {
    console.log("------------------"+payload)
    this.SET_COLLAPSE(payload);
  }

}

export const ScriptModule = getModule(ScriptStore)