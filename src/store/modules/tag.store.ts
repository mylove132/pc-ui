import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface Tag {
  name: string;
  title: string;
  path: string;
}
interface DelTag {
  index: number;
}
export interface ITagState {
  tagsList: Tag[],
  collapse: boolean
}
@Module({ dynamic: true, store, name: 'tag', namespaced: true })
class TagStore extends VuexModule implements ITagState {
  tagsList: Tag[] = [];
  collapse: boolean = false;

  @Mutation
  SET_TAGS_ITEM(payload: Tag) {
    this.tagsList.push(payload);
  }

  @Mutation
  DEL_TAGS_ITEM(payload: DelTag) {
    this.tagsList.splice(payload.index, 1);
  }

  @Mutation
  CLEAR_TAGS() {
    this.tagsList = [];
  }

  @Mutation
  CLOSE_TAGS_OTHER(payload: Tag[]) {
    this.tagsList = payload;
  }

  @Mutation
  CLOSE_CURRENT_TAG(payload: any) {
    for (let i = 0, len = this.tagsList.length; i < len; i++) {
      const item = this.tagsList[i];
      if (item.path === payload.$route.fullPath) {
          if (i < len - 1) {
            payload.$router.push(this.tagsList[i + 1].path);
          } else if (i > 0) {
              payload.$router.push(this.tagsList[i - 1].path);
          } else {
              payload.$router.push("/");
          }
          this.tagsList.splice(i, 1);
          break;
      }
  }
  }


  @Mutation
  SET_COLLAPSE(payload: boolean): void {
    this.collapse = payload;
  }

  @Action
  public dispatchSetTagsItem(payload: Tag) {
    this.SET_TAGS_ITEM(payload);
  }

  @Action
  public dispatchClearTags() {
    this.CLEAR_TAGS();
  }

  @Action
  public dispatchCloseTagsOther(payload: Tag[]) {
    this.CLOSE_TAGS_OTHER(payload);
  }

  @Action
  public dispatchDelTagsItem(payload: DelTag) {
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

export const tagsModule = getModule(TagStore)