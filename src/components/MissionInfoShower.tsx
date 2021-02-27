import React, { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { TwfInf } from '../type'
import { ClickShowRaw } from './ClickShowRaw'

export const MissionInfoShower: FunctionComponent<{ inf: TwfInf }> = ({ inf }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Mission Info: {inf.n}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid style={{maxWidth: '100%'}} spacing={1} container direction={'column'}>
          <Grid item>mission name: {inf.n}</Grid>
          <Grid item>mission description:</Grid>
          <Grid style={{maxWidth: '100%'}}>
            {inf.dp.split(/[\n\r]+/g).map((str, k) => (
              <div key={k} style={{lineBreak: 'auto', maxWidth: '100%'}}>{str}</div>
            ))}
          </Grid>
          <Grid item>mission goal: {inf.go}</Grid>
          <Grid item>mission fail: {inf.fa}</Grid>
          <Grid item>camps: {inf.cs.join(',')}</Grid>
          <Grid item>min players: {inf.minp}</Grid>
          <Grid item>max players: {inf.maxp}</Grid>
          <Grid item>max life: {inf.ml ?? 3}</Grid>
          <Grid item>author: {inf.sn} ({inf.su})</Grid>
          <Grid item>ability: {inf.ab}</Grid>
          <Grid item>ri: {inf.ri.length > 0 ? inf.ri.join(',') : <i>none</i>}</Grid>
          <Grid item>
            <ClickShowRaw raw={inf}/>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
