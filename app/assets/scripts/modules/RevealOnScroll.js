import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ReveaLOnScroll {
  constructor(itemToReveal, itemOffset) {
    this.itemsToReveal = itemToReveal;
    this.offsetPercentage = itemOffset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercentage
      })
    });
  }
}

export default ReveaLOnScroll;