import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

export const ApiURL = environment.baseUrl;
export const httpLogin = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

export const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

// Administrator --- User Rights routes

export const userMaster = ApiURL + "administrator/userMaster";
export const getModule = ApiURL + "administrator/getModule";
export const getScreen = ApiURL + "administrator/getScreen";
export const userRight = ApiURL + "administrator/userRight";
export const insertUserRights = ApiURL + "administrator/insertUserRights";

// common routes
export const setResetModify = ApiURL + "common/setResetModify";
export const deleteRow = ApiURL + "common/deleteRow";
export const SP_CM_FillCombo = ApiURL + "common/SP_CM_FillCombo";
// Login Routes
export const getCompanyDetails = ApiURL + "auth/getCompanyDetails";
export const login = ApiURL + "auth/signin";

// Sales Module --- Master ---- Item Unit Master Routes
export const UPSERT_ITEM_UNIT_MASTER = ApiURL + "sales/UPSERT_ITEM_UNIT_MASTER";

// Sales Module ---- Transaction --- Sales Order Routes
export const UPSERT_CUSTOMER_PO = ApiURL + "sales/UPSERT_CUSTOMER_PO";
export const Item_SelectedIndexChanged =
  ApiURL + "sales/Item_SelectedIndexChanged";
export const INSERT_UPSERT_CUSTOMER_PO =
  ApiURL + "sales/INSERT_UPSERT_CUSTOMER_PO";
export const INSERT_UPSERT_CUSTOMER_PO_DETAIL =
  ApiURL + "sales/INSERT_UPSERT_CUSTOMER_PO_DETAIL";
export const TableResponse = ApiURL + "sales/TableResponse";
export const insertItemMaster = ApiURL + "sales/insertItemMaster";
export const updateItemMaster = ApiURL + "sales/updateItemMaster";

export const deleteTable = ApiURL + "deleteTable";
export const postBomMaster = ApiURL + "postBomMaster";
export const postBomDetail = ApiURL + "postBomDetail";
export const updateBomMaster = ApiURL + "updateBomMaster";

export const getInvoiceDetails = ApiURL + "getInvoiceDetails";
