<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>
<!-- Example using html/scss compoennts -->
<template>
<div class="example">
  <div class="mc-datatable">
    <!-- HEADER -->
    <div class="mc-datatable__header">
      <div class="mc-datatable__topbar">
        <div class="mc-datatable__topbar-edition">
          <!-- PublishEdit24 -->
          <button
            type="button"
            class="
              mc-button
              mc-button--s
              mc-button--square
              mc-button--bordered-neutral
            "
          >
            <svg class="mc-button__icon">
              <use xlink:href="#PublishEdit24" />
            </svg>
          </button>
          <!-- DownloadWeb24 -->
          <button
            type="button"
            class="
              mc-button
              mc-button--s
              mc-button--square
              mc-button--bordered-neutral
            "
          >
            <svg class="mc-button__icon">
              <use xlink:href="#DownloadWeb24" />
            </svg>
          </button>
        </div>
        <div class="mc-datatable__topbar-actions">
          <!-- Field -->
          <div class="mc-toggle mc-toggle--s">
            <input class="mc-toggle__input" id="toggle" type="checkbox" />
            <label class="mc-toggle__label" for="toggle">
              <span class="mc-toggle__content">Online products only</span>
            </label>
          </div>
          <!-- Field -->
          <div class="mc-left-icon-input">
            <svg class="mc-left-icon-input__icon">
              <use xlink:href="#DisplaySearch24" />
            </svg>
            <input
              type="search"
              class="mc-left-icon-input__input mc-text-input mc-text-input--s"
              id="withIcon"
              placeholder="I am looking for..."
              name="withIcon"
            />
          </div>
          <!-- Filters -->
          <button
            type="button"
            class="mc-button mc-button--s mc-button--bordered"
          >
            <svg class="mc-button__icon">
              <use xlink:href="#DisplayFilter24" />
            </svg>
            <span class="mc-button__label">Filter</span>
          </button>
          <!-- Settings -->
          <button
            type="button"
            class="
              mc-button
              mc-button--s
              mc-button--square
              mc-button--bordered-neutral
            "
          >
            <svg class="mc-button__icon">
              <use xlink:href="#DisplaySetting24" />
            </svg>
          </button>
          <!-- Primary action -->
          <button type="button" class="mc-button mc-button--s">
            <span class="mc-button__label">Add new product</span>
          </button>
          <!-- Negative action -->
          <button
            type="button"
            class="mc-button mc-button--s mc-button--bordered-danger"
          >
            <span class="mc-button__label">Delete product</span>
          </button>
        </div>
      </div>
      <div class="mc-datatable__filters">
        <div
          class="mc-tag-removable mc-tag-removable--dark mc-tag-removable--s"
        >
          <span class="mc-tag-removable__label">Hammer drill</span>
          <button class="mc-tag-removable__remove">
            <span class="mc-tag-removable__remove-text">Supprimer</span>
          </button>
        </div>
        <div
          class="mc-tag-removable mc-tag-removable--dark mc-tag-removable--s"
        >
          <span class="mc-tag-removable__label">Regular drill</span>
          <button class="mc-tag-removable__remove">
            <span class="mc-tag-removable__remove-text">Supprimer</span>
          </button>
        </div>
        <div
          class="mc-tag-removable mc-tag-removable--dark mc-tag-removable--s"
        >
          <span class="mc-tag-removable__label">Hammer</span>
          <button class="mc-tag-removable__remove">
            <span class="mc-tag-removable__remove-text">Supprimer</span>
          </button>
        </div>
        <a href="#" class="mc-link mc-link--s">Reset</a>
      </div>
    </div>

    <!-- DATATABLE -->
    <div class="mc-datatable__container">
      <!-- MAIN -->
      <div class="mc-datatable__main">
        <!-- main -->
        <table class="mc-datatable__table">
          <thead>
            <tr>
              <th scope="col" class="mc-datatable__cell-checkbox">
                <div class="mc-checkbox">
                  <input
                    id="checkbox-00"
                    type="checkbox"
                    class="mc-checkbox__input"
                    aria-label="Checkbox Label"
                  />
                </div>
              </th>
              <th scope="col" class="mc-datatable__cell-button">&nbsp;</th>
              <th scope="col">
                <button
                  class="mc-datatable__sort mc-datatable__btn"
                  type="button"
                >
                  <span class="mc-datatable__sort-label">
                    <span class="visually-hidden">Trier par</span> Product name
                  </span>

                  <span class="mc-datatable__sort-arrow"></span>
                </button>
              </th>
              <th scope="col">
                <button
                  class="mc-datatable__sort mc-datatable__btn"
                  type="button"
                >
                  <span class="mc-datatable__sort-label">
                    <span class="visually-hidden">Trier par</span> Product ID
                  </span>

                  <span class="mc-datatable__sort-arrow"></span>
                </button>
              </th>
              <th scope="col">
                <span class="mc-datatable__head-label">Discount %</span>
              </th>
              <th scope="col">
                <span class="mc-datatable__head-label">Status</span>
              </th>
              <th scope="col">
                <span class="mc-datatable__head-label">Product Link</span>
              </th>
              <th scope="col" class="mc-datatable__cell-button">
                <!-- Label (options) -->
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- ROW 1 -->
            <tr class="mc-datatable__row-parent">
              <th scope="row">
                <div class="mc-checkbox">
                  <input
                    id="checkbox-01"
                    type="checkbox"
                    class="mc-checkbox__input"
                    aria-label="Checkbox Label"
                  />
                </div>
              </th>
              <td>
                <button
                  id="expand"
                  class="mc-datatable__expand mc-datatable__btn"
                  type="button"
                >
                  <span class="mc-datatable__btn-label">D??plier la ligne</span>
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#ControlCircleMore24" />
                  </svg>
                </button>
              </td>
              <td>Perceuse-visseuse ?? Percussion</td>
              <td class="mc-datatable__cell-number">#123456789</td>
              <td class="mc-datatable__cell-field">
                <input
                  type="text"
                  class="mc-text-input mc-text-input--s"
                  placeholder="e.g. 15"
                />
              </td>
              <td>
                <div class="mc-badge mc-badge--warning">
                  Waiting for approval
                </div>
              </td>
              <td>
                <a href="#" class="mc-link mc-link--s"> Page link </a>
              </td>
              <td class="mc-datatable__cell-button">
                <button
                  class="mc-datatable__options mc-datatable__btn"
                  type="button"
                >
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#DisplayOther24" />
                  </svg>
                </button>
              </td>
            </tr>
            <!-- ROW 1bis -->
            <tr
              class="
                mc-datatable__row-expandable
                mc-datatable__row-expandable--offset-2
              "
            >
              <td colspan="8">
                <div class="mc-datatable__row-inner">
                  <table class="mc-datatable__subtable">
                    <thead>
                      <tr>
                        <th scope="col">Label</th>
                        <th scope="col">Label</th>
                        <th scope="col">Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Text-sub</td>
                        <td>Text-sub</td>
                        <td>Text-sub</td>
                      </tr>
                      <tr>
                        <td>Text-sub</td>
                        <td>Text-sub</td>
                        <td>Text-sub</td>
                      </tr>
                      <tr>
                        <td>Text-sub</td>
                        <td>Text-sub</td>
                        <td>Text-sub</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
            <!-- ROW 2 -->
            <tr>
              <th scope="row">
                <div class="mc-checkbox">
                  <input
                    id="checkbox-01"
                    type="checkbox"
                    class="mc-checkbox__input"
                    aria-label="Checkbox Label"
                  />
                </div>
              </th>
              <td>
                <button
                  class="mc-datatable__expand mc-datatable__btn"
                  type="button"
                >
                  <span class="mc-datatable__btn-label">D??plier la ligne</span>
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#ControlCircleMore24" />
                  </svg>
                </button>
              </td>
              <td>Perceuse ?? percussion sans fil</td>
              <td class="mc-datatable__cell-number">#456</td>
              <td class="mc-datatable__cell-field">
                <input
                  type="text"
                  class="mc-text-input mc-text-input--s"
                  placeholder="e.g. 15"
                />
              </td>
              <td>
                <div class="mc-badge mc-badge--success">Online</div>
              </td>
              <td>
                <a href="#" class="mc-link mc-link--s"> Page link </a>
              </td>
              <td class="mc-datatable__cell-button">
                <button
                  class="mc-datatable__options mc-datatable__btn"
                  type="button"
                >
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#DisplayOther24" />
                  </svg>
                </button>
              </td>
            </tr>
            <!-- ROW 3 -->
            <tr class="selected">
              <th scope="row">
                <div class="mc-checkbox">
                  <input
                    id="checkbox-02"
                    type="checkbox"
                    checked
                    class="mc-checkbox__input"
                    aria-label="Checkbox Label"
                  />
                </div>
              </th>
              <td>
                <button
                  class="mc-datatable__expand mc-datatable__btn"
                  type="button"
                >
                  <span class="mc-datatable__btn-label">D??plier la ligne</span>
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#ControlCircleMore24" />
                  </svg>
                </button>
              </td>
              <td>Perceuse sans fil</td>
              <td class="mc-datatable__cell-number">#2345678</td>
              <td class="mc-datatable__cell-field">
                <input
                  type="text"
                  class="mc-text-input mc-text-input--s"
                  placeholder="e.g. 15"
                />
              </td>
              <td>
                <div class="mc-badge mc-badge--success">Online</div>
              </td>
              <td>
                <a href="#" class="mc-link mc-link--s"> Page link </a>
              </td>
              <td class="mc-datatable__cell-button">
                <button
                  class="mc-datatable__options mc-datatable__btn"
                  type="button"
                >
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#DisplayOther24" />
                  </svg>
                </button>
              </td>
            </tr>
            <!-- ROW 4 -->
            <tr>
              <th scope="row">
                <div class="mc-checkbox">
                  <input
                    id="checkbox-03"
                    type="checkbox"
                    class="mc-checkbox__input"
                    aria-label="Checkbox Label"
                  />
                </div>
              </th>
              <td>
                <button
                  class="mc-datatable__expand mc-datatable__btn"
                  type="button"
                >
                  <span class="mc-datatable__btn-label">D??plier la ligne</span>
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#ControlCircleMore24" />
                  </svg>
                </button>
              </td>
              <td>Perceuse ?? percussion filaire</td>
              <td class="mc-datatable__cell-number">-</td>
              <td class="mc-datatable__cell-field">
                <input
                  type="text"
                  class="mc-text-input mc-text-input--s"
                  placeholder="e.g. 15"
                />
              </td>
              <td>
                <div class="mc-badge mc-badge--neutral">Draft</div>
              </td>
              <td>
                <a href="#" class="mc-link mc-link--s"> Page link </a>
              </td>
              <td class="mc-datatable__cell-button">
                <button
                  class="mc-datatable__options mc-datatable__btn"
                  type="button"
                >
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#DisplayOther24" />
                  </svg>
                </button>
              </td>
            </tr>
            <!-- ROW 5 -->
            <tr>
              <th scope="row">
                <div class="mc-checkbox">
                  <input
                    id="checkbox-04"
                    type="checkbox"
                    class="mc-checkbox__input"
                    aria-label="Checkbox Label"
                  />
                </div>
              </th>
              <td>
                <button
                  class="mc-datatable__expand mc-datatable__btn"
                  type="button"
                >
                  <span class="mc-datatable__btn-label">D??plier la ligne</span>
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#ControlCircleMore24" />
                  </svg>
                </button>
              </td>
              <td>Perceuse visseuse sans fil</td>
              <td class="mc-datatable__cell-number">#34567</td>
              <td class="mc-datatable__cell-field">
                <input
                  type="text"
                  class="mc-text-input mc-text-input--s"
                  placeholder="e.g. 15"
                />
              </td>
              <td>
                <div class="mc-badge mc-badge--danger">Offline</div>
              </td>
              <td>
                <a href="#" class="mc-link mc-link--s"> Page link </a>
              </td>
              <td class="mc-datatable__cell-button">
                <button
                  class="mc-datatable__options mc-datatable__btn"
                  type="button"
                >
                  <svg class="mc-datatable__btn-icon">
                    <use xlink:href="#DisplayOther24" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- /main -->
      </div>

      <!-- FOOTER -->
      <div class="mc-datatable__footer">
        <div class="mc-datatable__select">
          <label for="selectRows" class="mc-datatable__select-label">
            Rows per page
          </label>
          <select id="selectRows" class="mc-select mc-select--s">
            <option value="option1">1</option>
            <option value="option2">10</option>
            <option value="option3">...</option>
            <option value="option4" selected>999</option>
          </select>
        </div>
        <div class="mc-datatable__count">
          <strong>1-999</strong> of <strong>9999 items</strong>
        </div>
        <!-- Pagination -->
        <div class="mc-datatable__pagination">
          <nav class="mc-pagination" role="navigation" aria-label="pagination">
            <a
              href="#"
              class="mc-pagination__button"
              aria-label="Previous page"
            >
              <!-- <svg class="mc-pagination__button-icon">
                <use xlink:href="#iconPaginationPrev" />
              </svg> -->
            </a>

            <div class="mc-pagination__field">
              <select class="mc-select mc-pagination__select">
                <option value="1">Page 1 of 99</option>
                <option value="2">Page 2 of 99</option>
                <option value="3">Page x of 99</option>
                <option value="99">Page 99 of 99</option>
              </select>
            </div>

            <a href="#" class="mc-pagination__button" aria-label="Next Page">
              <!-- <svg class="mc-pagination__button-icon">
                <use xlink:href="#iconPaginationNext" />
              </svg> -->
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
  <symbol id="PublishEdit24" viewBox="0 0 24 24">
    <path
      d="M19 12a1 1 0 00-1 1v5H6V6h5a1 1 0 000-2H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-6a1 1 0 00-1-1z"
    />
    <path
      d="M21.7 4.24l-2-2a1 1 0 00-1.4 0l-9.59 9.39a.91.91 0 00-.25.41L7.29 15.7a.5.5 0 00.61.64l3.83-1.11a.94.94 0 00.42-.25l9.55-9.31a1 1 0 000-1.43zM19.57 5l-.57.53-.6-.53.6-.61zM11 12.23l6.72-6.56.58.56-6.73 6.56zm-.7.72l.49.48-.7.2z"
    />
  </symbol>
  <symbol id="DownloadWeb24" viewBox="0 0 24 24">
    <path
      d="M11.29 15.71a1 1 0 001.42 0l4-4a1 1 0 00-1.42-1.42L13 12.59V3a1 1 0 00-2 0v9.59l-2.29-2.3a1 1 0 10-1.42 1.42z"
    />
    <path
      d="M19.48 13.61a1 1 0 00-1.36.4 1 1 0 00.4 1.35c.94.52 1.48 1.12 1.48 1.64 0 1.22-3.12 3-8 3s-8-1.78-8-3c0-.52.54-1.12 1.48-1.64a1 1 0 00.4-1.36 1 1 0 00-1.36-.4C2.89 14.5 2 15.71 2 17c0 2.85 4.3 5 10 5s10-2.15 10-5c0-1.29-.89-2.5-2.52-3.39z"
    />
  </symbol>
  <symbol id="DisplaySetting24" viewBox="0 0 24 24">
    <path
      d="M16 11.63a3.13 3.13 0 000-.43c0-.13-.08-.24-.11-.36s-.07-.27-.12-.39-.13-.25-.2-.37l-.17-.31a3.37 3.37 0 00-.4-.35 2.31 2.31 0 00-.2-.24c-.11-.11-.24-.21-.36-.31s-.15-.13-.23-.18a3.3 3.3 0 00-.41-.23l-.27-.14c-.14-.06-.28-.09-.43-.14l-.32-.1h-.8a4.17 4.17 0 00-.8.08 3.45 3.45 0 00-.57.18l-.18.05a3.88 3.88 0 00-.63.35h-.05a4 4 0 00-.55.45 3.64 3.64 0 00-.4.48.87.87 0 00-.09.11 3.67 3.67 0 00-.26.48 2 2 0 00-.11.2 3.22 3.22 0 00-.14.44c0 .11-.08.2-.1.31s0 .27 0 .4v.4H8v.37a3.13 3.13 0 000 .43c0 .13.08.24.11.36s.07.27.12.39.13.25.2.37l.17.31a3.37 3.37 0 00.29.35 2.31 2.31 0 00.2.24c.11.11.24.21.36.31s.15.13.23.18a3.3 3.3 0 00.41.23l.27.14c.14.06.28.09.43.14l.32.1h.8a4.17 4.17 0 00.8-.08 3.49 3.49 0 00.67-.21h.08a4.36 4.36 0 00.64-.35 4 4 0 00.55-.45 3.64 3.64 0 00.4-.48.87.87 0 00.09-.11 2.91 2.91 0 00.27-.49c0-.06.07-.12.1-.19a3.36 3.36 0 00.14-.45 2.64 2.64 0 00.1-.3v-.4-.4c.25-.15.25-.27.25-.39zm-2 .61v.16a2.63 2.63 0 01-.09.3v.08a2.19 2.19 0 01-.16.3 2.17 2.17 0 01-.24.29 1.9 1.9 0 01-1 .54 1.75 1.75 0 01-.4 0h-.4l-.23-.07-.15-.05-.2-.11-.14-.07a1.07 1.07 0 01-.16-.14l-.14-.11a1.71 1.71 0 01-.11-.14s-.09-.1-.13-.16a.83.83 0 01-.07-.13 1.39 1.39 0 01-.11-.21s0-.1-.05-.15a1.42 1.42 0 01-.22-.17v-.19a1.49 1.49 0 010-.21 1.79 1.79 0 010-.24v-.16a1.31 1.31 0 01.09-.28.38.38 0 010-.1 2.19 2.19 0 01.16-.3 2.17 2.17 0 01.24-.29 1.79 1.79 0 01.62-.42 2 2 0 01.35-.11 1.75 1.75 0 01.4 0h.4l.23.07.15.05.21.11.13.07.17.14.13.11a1.71 1.71 0 01.11.14s.09.1.13.16.05.09.08.14.07.13.1.2a1 1 0 01.06.16l.06.21v.19A1.49 1.49 0 0114 12a1.79 1.79 0 010 .24z"
    />
    <path
      d="M20.67 9l-1.34-.15a7.54 7.54 0 00-.9-1.56L19 6a1.48 1.48 0 00-.63-1.89l-2.71-1.55a1.5 1.5 0 00-2 .41l-.8 1.08a7.74 7.74 0 00-1.8 0L10.3 3a1.51 1.51 0 00-2-.41L5.66 4.12A1.49 1.49 0 005 6l.54 1.23a7.54 7.54 0 00-.9 1.56L3.33 9A1.49 1.49 0 002 10.45v3.1A1.49 1.49 0 003.33 15l1.34.15a7.54 7.54 0 00.9 1.56L5 18a1.49 1.49 0 00.63 1.9l2.68 1.56a1.51 1.51 0 002-.41L11.1 20a7.74 7.74 0 001.8 0l.8 1a1.51 1.51 0 001.21.61 1.59 1.59 0 00.75-.2l2.68-1.56A1.49 1.49 0 0019 18l-.54-1.23a7.54 7.54 0 00.9-1.56l1.31-.21A1.49 1.49 0 0022 13.55v-3.1A1.49 1.49 0 0020.67 9zM20 13.11l-2.12.23-.21.6a6 6 0 01-1.15 2l-.42.48.86 2L15 19.48l-1.26-1.72-.62.13a6 6 0 01-2.32 0l-.62-.13L9 19.48l-2-1.1.86-2-.42-.48a6 6 0 01-1.15-2l-.21-.6L4 13.11v-2.22l2.12-.23.21-.6a6 6 0 011.15-2l.42-.48L7 5.62l2-1.1 1.26 1.72.62-.13a6 6 0 012.32 0l.62.13L15 4.52l2 1.1-.86 2 .42.48a6 6 0 011.15 2l.21.6 2.12.23z"
    />
  </symbol>
  <symbol id="DisplayFilter24" viewBox="0 0 24 24">
    <path
      d="M13.09 11.71V5a1 1 0 00-2 0v6.71a2.5 2.5 0 000 4.58V19a1 1 0 002 0v-2.71a2.5 2.5 0 000-4.58zM20.59 12a2.5 2.5 0 00-1.5-2.29V5a1 1 0 00-2 0v4.71a2.5 2.5 0 000 4.58V19a1 1 0 002 0v-4.71a2.5 2.5 0 001.5-2.29zM7.09 7.71V5a1 1 0 00-2 0v2.71a2.5 2.5 0 000 4.58V19a1 1 0 001 1 1 1 0 001-1v-6.71a2.5 2.5 0 000-4.58z"
    />
  </symbol>
  <symbol id="DisplaySearch24" viewBox="0 0 24 24">
    <path
      d="M18 6.05a7 7 0 00-10.51 9.14l-3.08 3.08a1 1 0 001.41 1.42l3.09-3.09A7 7 0 0018 6.05zm-1.41 8.49a5 5 0 110-7.08 5 5 0 01.04 7.08z"
    />
  </symbol>
  <symbol id="ControlCircleMore24" viewBox="0 0 24 24">
    <path
      d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
    />
    <path
      d="M15.5 11h-2.42V8.5a1 1 0 00-2 0V11H8.5a1 1 0 000 2h2.58v2.5a1 1 0 002 0V13h2.42a1 1 0 000-2z"
    />
  </symbol>
  <symbol id="ControlCircleLess24" viewBox="0 0 24 24">
    <path
      d="M12 4a8 8 0 11-8 8 8 8 0 018-8m0-2a10 10 0 1010 10A10 10 0 0012 2z"
    />
    <path d="M15.5 13h-7a1 1 0 010-2h7a1 1 0 010 2z" />
  </symbol>
  <symbol id="DisplayOther24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="2" />
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="12" r="2" />
  </symbol>
  <symbol id="DisplayBlink24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="1.5" />
    <path
      d="M12 8a1 1 0 001-1V3a1 1 0 10-2 0v4a1 1 0 001 1zM8 12a1 1 0 00-1-1H3a1 1 0 000 2h4a1 1 0 001-1zM6.34 4.93a1 1 0 00-1.41 1.41L7.79 9.2a1 1 0 001.41 0 1 1 0 000-1.41zM21 11h-4a1 1 0 000 2h4a1 1 0 000-2zM15.51 9.49a1 1 0 00.7-.29l2.86-2.86a1 1 0 10-1.41-1.41L14.8 7.79a1 1 0 000 1.41 1 1 0 00.71.29zM12 16a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zM7.79 14.8l-2.86 2.86a1 1 0 000 1.41 1 1 0 001.41 0l2.86-2.86a1 1 0 00-1.41-1.41zM16.21 14.8a1 1 0 00-1.41 1.41l2.86 2.86a1 1 0 001.41 0 1 1 0 000-1.41z"
    />
  </symbol>
  <symbol id="iconPaginationPrev" viewBox="0 0 24 24">
    <path
      class="cls-2"
      d="M16.5,22a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L8.91,12l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,16.5,22Z"
    />
  </symbol>
  <symbol id="iconPaginationNext" viewBox="0 0 24 24">
    <path
      class="cls-2"
      d="M7.5,22a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L15.09,12,6.79,3.71A1,1,0,1,1,8.21,2.29l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,7.5,22Z"
    />
  </symbol>
</svg>

</template>

<style scoped lang="scss">
@import "settings-tools/_all-settings";
@import 'components/_c.datatable'; 
@import 'components/_c.datatable-tools'; 
@import 'components/_c.datatable-header';
@import 'components/_c.datatable-footer';
@import 'components/_c.datatable-subtable';
.main {
  background-color: $color-badge-neutral-background;
}
</style>
