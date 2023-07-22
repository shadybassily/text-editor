export default function tabsReducer(state, action) {
   switch (action.type) {
      case 'select': {
         //select a tab
         return {
            selectedTab: action.payload,
            tabs: state.tabs,
         };
      }
      case 'add': {
         //!return the state
         return {
            selectedTab: state.selectedTab,
            tabs: [...state.tabs, action.payload],
         };
         //add a new tab
      }
      case 'delete': {
         //add a new tab
      }
   }
}
