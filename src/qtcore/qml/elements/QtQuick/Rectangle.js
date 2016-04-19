registerQmlType({
  module: 'QtQuick',
  name:   'Rectangle',
  versions: /.*/,
  baseClass: QMLItem,
  constructor: function QMLRectangle(meta) {
    QMLItem.call(this, meta);

    createSimpleProperty("color", this, "color");
    createSimpleProperty("real", this, "radius");

    this.border = new QObject(this);
    createSimpleProperty("color", this.border, "color");
    createSimpleProperty("int", this.border, "width");

    this.border.color = 'black';
    this.border.width = 1;

    this.colorChanged.connect(this, function(newVal) {
        this.dom.firstChild.style.backgroundColor = QMLColor(newVal);
    });
    this.radiusChanged.connect(this, function(newVal) {
        this.dom.firstChild.style.borderRadius = newVal + 'px';
    });
    this.border.colorChanged.connect(this, function(newVal) {
        this.dom.firstChild.style.borderColor = QMLColor(newVal);
        this.setBorderWidth(newVal);
    });
    this.border.widthChanged.connect(this, function(newVal) {
        this.setBorderWidth(newVal);
    });

    this.setBorderWidth = function(newVal) {
        this.dom.firstChild.style.borderWidth = newVal + 'px';
        this.dom.style.paddingRight = 2*newVal + 'px';
        this.dom.style.paddingBottom = 2*newVal + 'px';
    }

    this.dom.innerHTML = "<div></div>"
    this.dom.firstChild.style.pointerEvents = "none";
    this.dom.firstChild.style.margin = "0";
    this.dom.firstChild.style.padding = "0";
    this.dom.firstChild.style.width = "100%";
    this.dom.firstChild.style.height = "100%";

    this.color = "white";
    this.radius = 0;
    this.dom.firstChild.style.borderWidth ='0px';
    this.dom.firstChild.style.borderStyle = 'solid';
    this.dom.firstChild.style.borderColor = 'black';
  }
});
