import { SelectorMatcher } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: keyof Post = 'title'): Post[] {
    if (!search.trim()) {
      return posts
    } else {
      return posts.filter(post => {
        if (typeof field === 'string' && typeof post[field] === 'string') {
          return (post[field] as string).toLowerCase().includes(search.toLocaleLowerCase())
        }
        return post
      })
    }
  }

}
