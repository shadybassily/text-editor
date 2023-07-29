export default function tabsReducer(state, action) {
   switch (action.type) {
      case 'select': {
         return {
            selectedTab: action.payload,
            tabs: state.tabs,
         };
      }
      case 'add': {
         return {
            selectedTab: state.selectedTab,
            tabs: [...state.tabs, action.payload],
         };
      }
      case 'delete': {
         if (!action.payload) return state;
         const tabs = state.tabs.filter((t) => t.id !== action.payload.id);
         // deleting the selected tab:
         // if tabs.length (new tabs after removal) is 0 -> no selected tab,
         // if not,  set it to be the first tab
         // not deleting the selecting tab, no change
         const selectedTab =
            state.selectedTab.id === action.payload.id
               ? tabs.length === 0
                  ? null
                  : tabs[0]
               : state.selectedTab;

         return {
            selectedTab,
            tabs,
         };
      }
      case 'update': {
         if (state.tabs.length === 0) return state;
         let newTabs = state.tabs.map((tab) => {
            if (tab.id !== action.payload.id) return tab;
            return action.payload;
         });
         return {
            selectedTab: action.payload,
            tabs: newTabs,
         };
      }
   }
}
