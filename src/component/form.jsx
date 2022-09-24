import React, { useState } from 'react'
import { Grid, Button } from "@material-ui/core";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css'

function Form() {


    const [formValues, setFormValues] = useState({
        erp: "",
        compName: "",
        branch: "",
        sCompName: "",
        aOwner: "",
        umrn: "",
        iNo: "",
        iDate: "",
        dDate: "",
        cDate: "",
        taxAmt: "",
        tGst: "",
        iTotal: "",
        tds: "",
        tcs: "",
        others: "",
        pAmt: "",
        pPaid: "",
        bDue: "",
        cAmt: "",
        aDate: "",
        pTacc: "",
        dBy: "",
    })

    const [img, setImg] = useState()

    const fileSelectedHandler = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]));
        console.log(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
        //post API
    }

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    return (
        <div style={{ margin: '10px' }}>
            <Grid item xs={12} direction="column" container
                justifyContent="center" alignItems="center" p={5} m={3}>Create or Edit Invoice page</Grid>
            <Grid
                container
                direction="column"
                alignItems="stretch"
                style={{ height: "400px" }}
            >

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                ERP Code
                            </label>
                            <input
                                type="text"
                                value={formValues.erp}
                                onChange={onChange}
                                className="form-control"
                                id="erp"
                                name="erp"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Buyer Comp Name
                            </label>
                            <input
                                type="text"
                                value={formValues.compName}
                                onChange={onChange}
                                className="form-control"
                                id="compName"
                                name="compName"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Branch
                            </label>
                            <input
                                type="text"
                                value={formValues.branch}
                                onChange={onChange}
                                className="form-control"
                                id="branch"
                                name="branch"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Seller Company Name
                            </label>
                            <input
                                type="text"
                                value={formValues.sCompName}
                                onChange={onChange}
                                className="form-control"
                                id="sCompName"
                                name="sCompName"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Account Owner
                            </label>
                            <input
                                type="text"
                                value={formValues.aOwner}
                                onChange={onChange}
                                className="form-control"
                                id="aOwner"
                                name="aOwner"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                UMRN
                            </label>
                            <input
                                type="text"
                                value={formValues.umrn}
                                onChange={onChange}
                                className="form-control"
                                id="umrn"
                                name="umrn"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Invoice No
                            </label>
                            <input
                                type="text"
                                value={formValues.iNo}
                                onChange={onChange}
                                className="form-control"
                                id="iNo"
                                name="iNo"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Invoice Date
                            </label>
                            <input
                                type="text"
                                value={formValues.iDate}
                                onChange={onChange}
                                className="form-control"
                                id="iDate"
                                name="iDate"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Due Date
                            </label>
                            <input
                                type="text"
                                value={formValues.dDate}
                                onChange={onChange}
                                className="form-control"
                                id="dDate"
                                name="dDate"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Credit days
                            </label>
                            <input
                                type="text"
                                value={formValues.cDate}
                                onChange={onChange}
                                className="form-control"
                                id="cDate"
                                name="cDate"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Taxable Amount
                            </label>
                            <input
                                type="text"
                                value={formValues.taxAmt}
                                onChange={onChange}
                                className="form-control"
                                id="taxAmt"
                                name="taxAmt"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Total GST
                            </label>
                            <input
                                type="text"
                                value={formValues.tGst}
                                onChange={onChange}
                                className="form-control"
                                id="tGst"
                                name="tGst"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Invoice Total
                            </label>
                            <input
                                type="text"
                                value={formValues.iTotal}
                                onChange={onChange}
                                className="form-control"
                                id="iTotal"
                                name="iTotal"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                TDS
                            </label>
                            <input
                                type="text"
                                value={formValues.tds}
                                onChange={onChange}
                                className="form-control"
                                id="tds"
                                name="tds"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                TCS
                            </label>
                            <input
                                type="text"
                                value={formValues.tcs}
                                onChange={onChange}
                                className="form-control"
                                id="tcs"
                                name="tcs"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Others
                            </label>
                            <input
                                type="text"
                                value={formValues.others}
                                onChange={onChange}
                                className="form-control"
                                id="others"
                                name="others"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Payable Amount
                            </label>
                            <input
                                type="text"
                                value={formValues.pAmt}
                                onChange={onChange}
                                className="form-control"
                                id="pAmt"
                                name="pAmt"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Partially Paid
                            </label>
                            <input
                                type="text"
                                value={formValues.pPaid}
                                onChange={onChange}
                                className="form-control"
                                id="pPaid"
                                name="pPaid"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Balance Due
                            </label>
                            <input
                                type="text"
                                value={formValues.bDue}
                                onChange={onChange}
                                className="form-control"
                                id="bDue"
                                name="bDue"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Collectable Amount
                            </label>
                            <input
                                type="text"
                                value={formValues.cAmt}
                                onChange={onChange}
                                className="form-control"
                                id="cAmt"
                                name="cAmt"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Actual Date
                            </label>
                            <input
                                type="text"
                                value={formValues.aDate}
                                onChange={onChange}
                                className="form-control"
                                id="aDate"
                                name="aDate"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Pay to Account
                            </label>
                            <input
                                type="text"
                                value={formValues.pTacc}
                                onChange={onChange}
                                className="form-control"
                                id="pTacc"
                                name="pTacc"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Delayed By
                            </label>
                            <input
                                type="text"
                                value={formValues.dBy}
                                onChange={onChange}
                                className="form-control"
                                id="dBy"
                                name="dBy"
                            />
                        </Grid>
                        <Grid item className="gridStyle" >
                            <label className="form-label">
                                Upload documents
                            </label>
                            <input type="file" onChange={fileSelectedHandler} />
                        </Grid>
                        <Grid item className="button" >
                            <Button type="submit" color="primary" >
                                Submit
                            </Button>
                        </Grid>
                    </div>
                </form>
                <Grid item xs={12}>
                    <img src={img} />
                </Grid>

            </Grid>
        </div>
    )
}

export default Form