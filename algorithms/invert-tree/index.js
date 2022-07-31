const givenTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 13,
      },
      right: {
        value: 14,
      }
    },
    right: {
      value: 5,
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 7,
      left: {
        value: 11,
      },
      right: {
        value: 12,
      }
    }
  }
};

const expectedTree = {
  value: 1,
  left: {
    value: 3,
    left: {
      value: 7,
    },
    right: {
      value: 8,
    }
  },
  right: {
    value: 2,
    left: {
      value: 5,
    },
    right: {
      value: 4,
    }
  }
};

function invertTree(tree) {
  if (!tree.left || !tree.right) {
    return;
  }
  const tmp = tree.left;

  tree.left = tree.right;
  tree.right = tmp;

  invertTree(tree.left);
  invertTree(tree.right);
}

invertTree(givenTree);

console.log(JSON.stringify(givenTree));