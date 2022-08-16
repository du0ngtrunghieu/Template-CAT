import React, {useState} from 'react';
import {
  Grow,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Manager, Popper, Reference} from 'react-popper';
import * as ReactDOM from 'react-dom';
import HorizontalCollapse from './HorizontalCollapse';
import HorizontalItem from './HorizontalItem';
import Box from '@mui/material/Box';
import IntlMessages from '../../../../utility/IntlMessages';
import {Fonts} from '../../../../../shared/constants/AppEnums';

function HorizontalGroup(props) {
  const [opened, setOpened] = useState(false);
  const {pathname} = useRouter();
  const {item, nestedLevel} = props;

  const handleToggle = (open) => {
    setOpened(open);
  };

  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (
        parent.children[i].url === url ||
        url.includes(parent.children[i].url)
      ) {
        return true;
      }
    }

    return false;
  }

  return (
    <Manager>
      <Reference>
        {({ref}) => (
          <ListItem
            ref={ref}
            className={clsx(
              'navItem',
              isUrlInChildren(item, pathname) && 'active',
            )}
            onMouseEnter={() => handleToggle(true)}
            onMouseLeave={() => handleToggle(false)}
            aria-owns={opened ? 'menu-list-grow' : null}
            aria-haspopup='true'
          >
            {item.icon && (
              <Icon color='action' className='navLinkIcon'>
                {item.icon}
              </Icon>
            )}
            <ListItemText
              primary={<IntlMessages id={item.messageId} />}
              sx={{
                fontWeight: Fonts.MEDIUM,
              }}
            />
            {nestedLevel > 0 && (
              <IconButton
                sx={{
                  ml: 2,
                }}
                disableRipple
              >
                <Icon
                  sx={{
                    fontSize: 18,
                  }}
                  className='arrow-icon'
                >
                  keyboard_arrow_right
                </Icon>
              </IconButton>
            )}
          </ListItem>
        )}
      </Reference>
      {ReactDOM.createPortal(
        <Popper
          placement={nestedLevel === 0 ? 'bottom-start' : 'right'}
          eventsEnabled={opened}
          positionFixed
        >
          {({ref, style, placement}) =>
            opened && (
              <Box
                ref={ref}
                sx={{
                  ...style,
                  boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.2)',
                  zIndex: 1110 + nestedLevel,
                  '& .popperClose': {
                    pointerEvents: 'none',
                  },
                }}
                data-placement={placement}
                className={clsx({
                  popperClose: !opened,
                })}
              >
                <Grow
                  in={opened}
                  id='menu-list-grow'
                  style={{transformOrigin: '0 0 0'}}
                >
                  <Paper
                    onMouseEnter={() => handleToggle(true)}
                    onMouseLeave={() => handleToggle(false)}
                  >
                    {item.children && (
                      <List
                        sx={{
                          px: 0,
                        }}
                      >
                        {item.children.map((item) => (
                          <React.Fragment key={item.id}>
                            {item.type === 'group' && (
                              <HorizontalGroup
                                item={item}
                                nestedLevel={nestedLevel}
                              />
                            )}

                            {item.type === 'collapse' && (
                              <HorizontalCollapse
                                item={item}
                                nestedLevel={nestedLevel}
                              />
                            )}

                            {item.type === 'item' && (
                              <HorizontalItem
                                item={item}
                                nestedLevel={nestedLevel}
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </List>
                    )}
                  </Paper>
                </Grow>
              </Box>
            )
          }
        </Popper>,
        document.querySelector('#root'),
      )}
    </Manager>
  );
}

HorizontalGroup.propTypes = {
  item: PropTypes.object,
  nestedLevel: PropTypes.number,
};

HorizontalGroup.defaultProps = {};

export default React.memo(HorizontalGroup);
