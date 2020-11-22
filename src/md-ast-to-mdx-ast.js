import visit from 'unist-util-visit';
import { isComment, getCommentContents } from '@mdx-js/util';

export default (_options) => (tree) => {
  visit(tree, 'jsx', (node) => {
    if (isComment(node.value)) {
      node.type = 'comment';
      node.value = getCommentContents(node.value);
    }
  });

  return tree;
};
