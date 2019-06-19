/**
 * @Author: sarahnouh
 * @Date:   2019-06-19T02:00:10+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-06-19T02:01:46+02:00
 */
export interface menuItem {
  /**
   *the src of the image
   *@type string
   */
  imgSrc: string;
  /**
   *the item type (side or main course)
   *@type string
   */
  type: string;
  /**
   *the item name
   *@type string
   */
  name: string;
  /**
   *the item price
   *@type number
   */
  price: number;
}
