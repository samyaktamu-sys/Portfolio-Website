import { fpy } from './fpy'
import { moldflow } from './moldflow'
import { mspc } from './mspc'
import { ml } from './ml'
import { stonewall } from './stonewall'
import { beergame } from './beergame'
import { forecasting } from './forecasting'

export const projects = [fpy, moldflow, mspc, ml, stonewall, beergame, forecasting]

export const featuredProjects = projects.filter((p) => p.featured)

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
