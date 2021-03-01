import React, { FunctionComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { TwfInf } from '../type'
import { ClickShowRaw } from './ClickShowRaw'
import { getCamp } from '../translators/twf/utils/getCamp'
import PropTypes from 'prop-types'

export const MissionInfoShower: FunctionComponent<{ inf: TwfInf }> = ({ inf }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography>任務資訊: {inf.n}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid style={{ maxWidth: '100%' }} spacing={1} container direction={'column'}>
          <Grid item>名稱: {inf.n}</Grid>
          <Grid item>說明:</Grid>
          <Grid style={{ maxWidth: '100%' }}>
            {inf.dp.split(/[\n\r]+/g).map((str, k) => (
              <div key={k} style={{ lineBreak: 'auto', maxWidth: '100%' }}>{str}</div>
            ))}
          </Grid>
          <Grid item>成功條件: {inf.go}</Grid>
          <Grid item>失敗條件: {inf.fa}</Grid>
          <Grid item>可用陣營: {inf.cs.map(getCamp).join(',')}</Grid>
          <Grid item>最少玩家: {inf.minp}</Grid>
          <Grid item>最多玩家: {inf.maxp}</Grid>
          <Grid item>可用生命: {inf.ml ?? 3}</Grid>
          <Grid item>作者: {inf.sn} ({inf.su})</Grid>
          <Grid item>技能等級: {inf.ab}</Grid>
          <Grid item>ri: {inf.ri.length > 0 ? inf.ri.join(',') : <i>none</i>}</Grid>
          <Grid item>
            <ClickShowRaw raw={inf}/>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

MissionInfoShower.propTypes = {
  inf: PropTypes.any.isRequired
}
