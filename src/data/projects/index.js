import { fpy } from './fpy'
import { moldflow } from './moldflow'
import { mspc } from './mspc'
import { ml } from './ml'

export const projects = [fpy, moldflow, mspc, ml]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
