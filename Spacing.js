import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const buildStyles = () => {
  const properties = [
    {
      key: 'm',
      name: 'margin'
    },
    {
      key: 'p',
      name: 'padding'
    }
  ]
  const sides = [
    {
      key: 't',
      name: 'top'
    },
    {
      key: 'r',
      name: 'right'
    },
    {
      key: 'b',
      name: 'bottom'
    },
    {
      key: 'l',
      name: 'left'
    }
  ]
  const sizes = [
    {
      key: '0',
      value: '0'
    },
    {
      key: '1',
      value: '0.25rem'
    },
    {
      key: '2',
      value: '0.5rem'
    },
    {
      key: '3',
      value: '1rem'
    },
    {
      key: '4',
      value: '1.5rem'
    },
    {
      key: '5',
      value: '3rem'
    }
  ]

  const classes = []

  for (let a = 0; a < properties.length; a++) {
    const property = properties[a]
    for (let c = 0; c < sizes.length; c++) {
      const size = sizes[c]
      classes.push(`
        &.${property.key}-${size.key} {
            ${property.name}: ${size.value} !important;
        }
        `)
    }
  }

  for (let a = 0; a < properties.length; a++) {
    const property = properties[a]
    for (let b = 0; b < sides.length; b++) {
      const side = sides[b]
      for (let c = 0; c < sizes.length; c++) {
        const size = sizes[c]
        classes.push(`
        &.${property.key}${side.key}-${size.key} {
            ${property.name}-${side.name}: ${size.value} !important;
        }
        `)
      }
    }
  }

  return classes
}

const classes = buildStyles()

const Styles = styled.div`
  ${classes.join('\n')}
`

const Spacing = props => {
  const classNames = cx({
    [`p-${props.p}`]: props.p !== null ? true : false,
    [`m-${props.m}`]: props.m !== null ? true : false,
    [`pt-${props.pt}`]: props.pt !== null ? true : false,
    [`pr-${props.pr}`]: props.pr !== null ? true : false,
    [`pb-${props.pb}`]: props.pb !== null ? true : false,
    [`pl-${props.pl}`]: props.pl !== null ? true : false,
    [`mt-${props.mt}`]: props.mt !== null ? true : false,
    [`mr-${props.mr}`]: props.mr !== null ? true : false,
    [`mb-${props.mb}`]: props.mb !== null ? true : false,
    [`ml-${props.ml}`]: props.ml !== null ? true : false
  })
  return <Styles {...props} className={classNames} />
}

const withSpacing = Component => {
  return props => {
    return <Spacing as={Component} {...props} />
  }
}

Spacing.defaultProps = {
  p: null,
  m: null,
  pt: null,
  pr: null,
  pb: null,
  pl: null,
  mt: null,
  mr: null,
  mb: null,
  ml: null
}
export { withSpacing }
export default Spacing
