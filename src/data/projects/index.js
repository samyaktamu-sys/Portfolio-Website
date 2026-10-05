import { fpy } from './fpy'
import { secondmachine } from './secondmachine'
import { pilotline } from './pilotline'
import { nn } from './nn'
import { m5 } from './m5'
import { mspc } from './mspc'
import { ml } from './ml'
import { forecasting } from './forecasting'
import { beergame } from './beergame'
import { stonewall } from './stonewall'
import { baja } from './baja'

export const projects = [fpy, secondmachine, pilotline, nn, m5, mspc, ml, forecasting, beergame, stonewall, baja]

export const featuredProjects = projects.filter((p) => p.featured)

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
