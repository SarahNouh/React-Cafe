/**
 * @Author: sarahnouh
 * @Date:   2019-06-19T02:02:05+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-06-19T02:03:18+02:00
 */
import { menuItem } from "./menu-item-interface";

export interface formProps {
  /**
   *the function to handle clicking the save button
   *@type  (item: menuItem) => void
   */
  handleSaveItem: (item: menuItem) => void;
  /**
   *A boolean that controls displaying the validation message in case there is any missing data
   *@type  boolean
   */
  error: boolean;
}
