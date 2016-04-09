window.failingTests = {
  Render: {
    Async: [
      'NumberAnimationAutorun'
    ],
    Simple: [
      'RectangleBorderChildren',
      'RectanglesOpacity'
    ]
  },
  QMLEngine: {
    parse: [
      'can parse a function assigned to a var property'
    ],
    imports: [
      'Javascript',
      'RecursiveInit',
      'RecursiveInit2'
    ],
    properties: [
      'alias have changed signal',
      'alias to id with same name',
      'ChangedExpressionSignal',
      'StringConversion',
      'undefined property has undefined value'
    ],
    scope: [
      'object id should override same-named property of base object'
    ]
  },
  Initialize: {
    QtQuick: [
      'Translate',
      'Scale',
      'Rotation',
      'Font',
      'AnimatedImage'
    ]
  }
};
