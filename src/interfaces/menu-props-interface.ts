/**
 * @Author: sarahnouh
 * @Date:   2019-06-19T01:53:08+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-06-19T02:00:49+02:00
 */
import { menuItem } from "./menu-item-interface";
export interface MenuProps {
  /**
   *the list of the menu items
   *@type  menuItem[]
   */
  menuItems: menuItem[];
  /**
   *the function to handle clicking the add item button and displaying the form
   *@type  () => void
   */
  handleShowForm: () => void;
}
